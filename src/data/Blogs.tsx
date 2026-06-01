import Image from "next/image";
import Link from "next/link";

export const Fulltime = () => {
  return (
    <div>
      <div className="space-y-2 ">
        <div className="">
          So, for context,{" "}
          <Link
            className="underline hover:text-accent "
            href={"https://nilaycodes.in"}
            target="_blank"
          >
            noobie
          </Link>{" "}
          got a freelance gig. Now, his work, my work lmao. We do the work, it
          gets delayed a little due to a stripe bug, and then get paid. <br />{" "}
          Noobie even grabs himself a full-time offer while we were working on
          this gig. <br />
          (Congrats Sir, you deserved that position)
        </div>
        <div className="flex gap-x-2">
          <div className="flex basis-1/2 pr-2">
            <Image
              src="/blogs/img1.webp"
              height={240}
              width={384}
              alt="First Earning Lmao"
            />
          </div>
          <div className="flex basis-1/2 pl-4">
            <div className="flex items-center">
              First earning party?
              <br />
              (PS:- The Biriyani was GOATED)
            </div>
          </div>
        </div>
        <div>
          Then, pujo comes, and yada yada yada, I start working on something
          else, when they give noobie another freelance gig. Cool right? But his
          boss then asks him to join before the joining date, so now he has too
          much work for himself, and he leaves the side gig (obv). <br />
          Now comes the catch lmao.
        </div>
        <div>
          They contact me, as even I worked on the previous gig. I was free, but
          frankly I didnt want another freelance gig anymore, and it was in
          python. Me no python 😊. Placements had started. I tell that, and
          without missing a beat, he goes - &quot;We can consider full time as
          well&quot;. <br />
          <br />
          What? Full time? No freaking way I get offered a full-time role this
          casually. HOLY SHIT!!!
          <div className="p-1" />
          <Image
            src="/blogs/img2.webp"
            height={480}
            width={700}
            alt="Full Time?"
            className="w-[90%] h-auto"
          />
        </div>
        <div>
          We had a chat about AI, the company, what the short term and long term
          goals were. What my previous experiences were etc etc. Something like
          an HR round.
          <div className="p-2" />
          The salary is less than what I wanted, but a Remote job, with cool
          founders? <br />I choose the latter any day of the week!
        </div>
        <div className="p-2" />
        <div>
          So, I&apos;m no longer unemployed haha! <br /> Cool story. Worthy
          enough to share lmao!
        </div>
      </div>
    </div>
  );
};

export const Fired = () => {
  return (
    <div>
      <div>
        <div>
          So yeah, 3 months after I joined I got fired. How and Why? Yeah
          I&apos;m trying to figure that out as well.
        </div>
        <div>
          I remember getting impossible deadlines (literally. Got a deadline of
          Jan-1 on Jan-2. Yeah you read that right). Missing those deadlines
          (obviously). And then getting ghosted when I ask for my last
          month&apos;s pay, and eventually I got a staple reply <br /> <br />
          &quot;We decided to fire.&quot; <br /> <br />
          Thats it. No further explanation, no payments being cleared, and no
          further replies.
        </div>
        <div>
          I got lured in by typescript work, which was un-surprisingly very
          less. Then I got shifted to cpp dev, which was not gonna lie, really
          cool. I learnt to use a ton of really cool tech which I wouldn&apos;t
          have otherwise. Although not getting paid probably isn&apos;t that
          cool, the rest of the experience was pretty darn cool. Some of the
          things which I would probably not have tested - MCP, UnrealEngine,
          Blender, using AI so vastly, development in cpp and even VisualStudio.
        </div>{" "}
        <br />
        <div className="space-y-2">
          Some important lessons I learnt -
          <ul
            className="mt-2  pl-6" // Use padding-left (pl) instead of margin (ml)
            style={{ listStyleType: "disc" }}
          >
            <li className="pl-1">MAINTAIN SOME FUCKING BOUNDARIES</li>
            <li className="pl-1">Follow your gut</li>
            <li className="pl-1">
              Think an extra 2 times before agreeing to any deadline
            </li>
            <li className="pl-1 text-justify">
              And ig the most important of all, never hesitate to ask for what
              is rightfully yours (which in this case was my salary)
            </li>
          </ul>
        </div>{" "}
        <br />
        <div>
          So in the end, 3 months of grind, good and bad moments together, a
          little sad that I was fired so abruptly, a little more sad that I did
          not end up getting my last salary. But all in all, he still was the
          first person to believe in me, he still was the first person to pay
          me. <br /> <br />
          So, friday, if you&apos;re reading this thanks! (But yeah,
          karma&apos;s a bitch, and it will take a lot more from you than the
          meager amount you owe me)
        </div>{" "}
        <br />
        <div className="pt-2">
          3 months of a wild ride! And I can say this with my entire heart
          again, <br />
          <span className="font-semibold">
            I DID WHAT I DID. <br />
            I DON&apos;T REGRET ANY OF WHAT I DID. <br />
            I WOULD DO THE ENTIRE THING AGAIN <br />
            AND I WOULD LOVE EVERY SECOND OF IT AGAIN!
          </span>
        </div>{" "}
        <br />
        <div>
          So, finally unemployed again hahaha! <br />
          Onto the next chapter! Peace!
        </div>
      </div>
    </div>
  );
};

export const AiOnPhone = () => {
  return (
    <div>
      <p>
        So, recently a new model launched, GLM 5.1. In my last work they used
        GLM 4.5 Air, and that model was actually really good in its job. So,
        naturally when the newer model launched I wanted to try it. But, but,
        but, who is going to let me try out the model? Like quite frankly that
        model required 220 gigs of (drum roll please...) VRAM. I have 16 gigs of
        RAM. So yeah, running it locally was completely out of question (I
        didn't want to melt my laptop, duh).
      </p>
      <br />

      <p>
        Then I tried a few sites where they claim to use GLM 5.1, but were they
        really GLM 5.1?
      </p>
      <br />

      <p>
        That made me question everything, starting with what if I had enough
        money to buy a{" "}
        <Link
          className="underline hover:text-accent "
          href={"https://jarvislabs.ai/blog/h200-price"}
          target="_blank"
        >
          H200
        </Link>
        ?
        <br />
        What models can I run in my laptop locally without burning it down?
        <br />
        What are the minimum specs you need to run a model?
        <br />
        Are specs even required?
        <br />
        What about a phone... Can a phone run a model?
        <br />
        What about a 10 year old phone?
      </p>

      <br />
      <p>
        [It was really hard to remember my entire line of thought, but it was
        something around this]
      </p>

      <br />
      <p>
        So, here starts the story of how I ran a model (very old and basic
        model) on my Motorola e3 Power.
      </p>
      <br />

      <p>
        So, for context, the specs of the phone - Mediatek MT6735P (28 nm)
        chipset, Quad-core 1.0 GHz Cortex-A53 CPU and Mali-T720MP2 GPU. 2GB RAM
        & 16GB ROM. Check all the spece{" "}
        <Link
          className="underline hover:text-accent "
          href={"https://www.gsmarena.com/motorola_moto_e3_power-8337.php"}
          target="_blank"
        >
          here
        </Link>
        !
      </p>

      <p>
        For normal people, the latest chipsets for phones are 4nm (the lower the
        faster), and 3nm for the flagships. Octa-core 4.74 GHz processor and
        Adreno 840 (1.3GHz) GPU and 12/16GB RAM. This is just the hardware
        difference between a midrange phone from '16 and a Flagship from '26.
        [These are the specs of{" "}
        <Link
          className="underline hover:text-accent "
          href={
            "https://www.gsmarena.com/samsung_galaxy_s26_ultra_5g-14320.php"
          }
          target="_blank"
        >
          Samsung S26 Ultra
        </Link>{" "}
        (Yes, I mentioned flagship!)]
      </p>
      <br />
      <p>
        I started with GPT, and kept on asking about what I can run, it
        basically boiled down to a 500M parameter model (for context GLM 5.1 is
        1T parameter model, 2000x more). And if I really wanted to push the
        limits of my 2GB hardware I could run a 1B param model.
      </p>

      <p>The 2 models were Qwen 2.5 0.5B Instruct, and Llama 3.2 1B model.</p>
      <br />
      <p>
        Now, lets understand my limitations first,
        <br />
        I had 2 gigs of RAM, so usable RAM was about ~1900 mb
        <br />
        Android 6 was roughly taking up ~400mb, and the launcher (the actual UI
        we use) took up ~300mb, and some other apps that were absolutely
        necessary (Phone app, Settings, Gboard takes 60mb for some reason? etc
        etc) took up ~250mb. So, idle RAM usage ~900mb. In a 10 y/o phone I
        couldn't use the ROM as RAM, cause the secondary memory was even slower.{" "}
        <br />
        Which meant I only got 1GB RAM for the actual model to run.
      </p>
      <br />

      <p>
        I decided to change the launcher to a lighter one{" "}
        <Link
          className="underline hover:text-accent "
          href={"https://f-droid.org/en/packages/fr.neamar.kiss/"}
          target="_blank"
        >
          (KISS Launcher)
        </Link>
        , which takes 30mb of memory to run. I also decided to use{" "}
        <Link
          className="underline hover:text-accent "
          href={"https://developer.android.com/tools/adb"}
          target="_blank"
        >
          android adb
        </Link>
        , and just force shut down a lot of the services which aren't necessary
        anymore (Phone, Messages, Photos etc) which saved another ~150mb.
      </p>
      <br />

      <p>
        Now my idle RAM usage went down from ~900mb ro just about ~500mb . Which
        gave me a huge 1350-1400mbs for the model to run!
      </p>
      <br />

      <p>
        Now to run the model I need to first set up llama.cpp. The present
        versions wont work with that ancient embedded system. So I spent nearly
        a day with{" "}
        <Link
          className="underline hover:text-accent "
          href={"https://aistudio.google.com/"}
          target="_blank"
        >
          ai-studio
        </Link>{" "}
        (cause its free, and the usage limits are massive). The build kept
        failing because of dependencies which couldn't run on the old software,
        and gemini kept on making changes to accustom them.
        <br />A whole lot of fixes here and there and about 18 hours of trial
        and error later, it... failed at 100%, 3 separate times. Imagine waiting
        over an hour for a progress bar to hit the end (3 freaking times), only
        for it to scream a nonsensical C++ error at the very last second.
      </p>
      <br />
      <Image
        src="/blogs/ai1.webp"
        height={480}
        width={700}
        alt="Build failed at 100%?"
        className="w-[90%] h-auto"
      />
      <br />
      <p>
        GPT finally pointed out that I was missing the atomic linking flags
        (basically the glue that holds the code together on old 32-bit chips).
        GPT also edited the final build command from:
      </p>
      <br />
      <pre>
        <code>make llama-server</code>
      </pre>

      <p>to:</p>

      <pre>
        <code>make llama-server -j4</code>
      </pre>
      <br />
      <p>
        The "j4" tag would use all 4 cores of CPU. That cut the build time from
        about 1.5 hours to around 25 mins.
      </p>
      <br />
      <p>
        Now that the stage was set, I finally ran the model with the prompt:
        <code>What is the capital of France?</code>
      </p>
      <br />
      <p>
        The model ran for about 15 seconds, and then it spit out:
        <br />
        <code>Paris</code>
      </p>
      <Image
        src="/blogs/ai2.webp"
        height={480}
        width={700}
        alt="First AI Response"
        className="w-[90%] h-auto"
      />
      <br />
      <p>
        I can not explain my excitement. At that moment, it felt like I had
        conquered the entire fucking world. Battling dependencies for an entire
        day (fine... 18 hours, not a complete day), the final sigh was immensely
        peaceful!
      </p>
      <br />
      <p>
        From there on, I tried it out a little more, and yes, a 500M param model
        isn't that good, but the fact that it run was a massive ego boost. I
        went on to run Llama 3.2 1B param model as well, and it was better, but
        naturally slower. This model ran only because I force stopped some
        services and changed the launcher which gave a 1B param model the
        breathing room to run! Now obviously a 1B param model wont run in its
        full glory on 1GB RAM so I had to run the GGUF Q4 version, and to be in
        a safe side I used the Q4 version for even the 500M model which could
        have run without the quantization. (In muggle terms - Quantization means
        that the model I ran was compressed from FP16 - 16 bits to 4 bits).
      </p>
      <br />
      <p>
        Here's a full video of how the models worked out!
        <br />
        <br />
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/CBSDAKy770E?si=knwEOjNvm0Vgu0zx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        If the embed doesnt work, watch it in{" "}
        <Link
          className="underline hover:text-accent "
          href={"https://www.youtube.com/watch?v=CBSDAKy770E"}
          target="_blank"
        >
          YouTube
        </Link>
        .
      </p>
      <br />
      <p>
        Once llama.cpp was set up, running another model was just downloading
        the model and running the command to run it. Ofcouse within the physical
        hardware bounds. That's all!
      </p>
      <br />
      <p>
        That was it for this rant! <br />
        If you read till here, thanks!
      </p>
    </div>
  );
};
