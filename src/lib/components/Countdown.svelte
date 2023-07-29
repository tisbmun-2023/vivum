<script lang="ts">
	import { vivumStartDate } from "$lib/config/indexPage";
	import { onMount } from "svelte";
    import CountdownPrimitive from "./CountdownPrimitive.svelte";
	import CountdownDate from "./CountdownDate.svelte";

    let vivumDate = Date.parse(vivumStartDate)
    let isTsZero = false

    interface CountdownInterface {
        days: string | number,
        hours: string | number,
        minutes: string | number,
        seconds: string | number,
    }

    let countdownVisibleTime: CountdownInterface = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }

    const tohhmmss = (secs: number): CountdownInterface => {
        let hours = Math.floor(secs / 3600);
        secs %= 3600;
        let minutes = Math.floor(secs / 60);
        let seconds = Math.floor(secs % 60);

        let days = Math.floor(hours / 24);
        hours %= 24;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    const setVisibleTime = () => {
        let ts = (vivumDate - Date.now())/1000

        if(ts < 0) {
            countdownVisibleTime = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
            isTsZero = true
            return
        }

        countdownVisibleTime = tohhmmss(ts);
    }

    onMount(() => {
        setVisibleTime();
        setInterval(setVisibleTime, 1000);
    })
</script>

<div class="flex flex-wrap items-center justify-center">
    <CountdownPrimitive type="days" value={countdownVisibleTime?.days} />
    <CountdownPrimitive type="hours" value={countdownVisibleTime?.hours} />
    <CountdownPrimitive type="minutes" value={countdownVisibleTime?.minutes} />
    <CountdownPrimitive type="seconds" value={countdownVisibleTime?.seconds} />
</div>

<div class="flex flex-wrap items-center justify-center">
<CountdownDate />
</div>