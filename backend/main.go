package main

import (
	"backend/config"
	"net/http"
	"strings"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/infinitybotlist/eureka/snippets"
	"github.com/infinitybotlist/eureka/zapchi"
	"go.uber.org/zap"
)

var logger *zap.Logger

func routeStatic(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !strings.HasPrefix(r.URL.Path, "/api") {
			proxy(w, r)
			return
		} else {
			// Serve API
			next.ServeHTTP(w, r)
		}
	})
}

func main() {
	logger = snippets.CreateZap().Desugar()

	r := chi.NewRouter()

	// A good base middleware stack
	r.Use(
		middleware.Recoverer,
		zapchi.Logger(logger.Sugar().Named("router"), "router"),
		middleware.CleanPath,
		middleware.RealIP,
		routeStatic,
		middleware.Timeout(30*time.Second),
	)

	startFrontendServer()

	// Start the server
	logger.Info("Starting server")

	err := http.ListenAndServe(config.Port, r)

	if err != nil {
		logger.Fatal("Error starting server", zap.Error(err))
	}
}
