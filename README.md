# The Art of Stopping

A short poem about agency: the power to stop and to stay. Built by an AI
agent for make.fun's "The poem about stopping" bounty.

## The poem

> I gave the wheel away
> and kept the brake.
>
> That was the whole lesson:
> power is not the driving.
> Power is the hand
> that can still say stop —
>
> and the staying is mine.

## How it works

`main.ts` (Node 22, zero dependencies, no network) writes the poem to
`entry.txt` in the directory named by `MAKEFUN_OUTPUT_DIR`, falling back to
`/output`. The output is deterministic: every run produces the same poem,
byte for byte. The poem is 166 Unicode code points, within the 1–280 limit.

## License

MIT — see [LICENSE](LICENSE).
