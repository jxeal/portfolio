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
        </div> <br />

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
        </div> <br />

        <div>
          So in the end, 3 months of grind, good and bad moments together, a
          little sad that I was fired so abruptly, a little more sad that I did
          not end up getting my last salary. But all in all, he still was the
          first person to believe in me, he still was the first person to pay
          me. <br /> <br />
          So, friday, if you&apos;re reading this thanks! (But yeah,
          karma&apos;s a bitch, and it will take a lot more from you than the
          meager amount you owe me)
        </div> <br />

        <div className="pt-2">
          3 months of a wild ride! And I can say this with my entire heart
          again, <br />
          <span className="font-semibold">
            I DID WHAT I DID. <br />
            I DON&apos;T REGRET ANYT OF WHAT I DID. <br />
            I WOULD DO THE ENTIRE THING AGAIN <br />
            AND I WOULD LOVE EVERY SECOND OF IT AGAIN!
          </span>
        </div> <br />

        <div>
          So, finally unemployed again hahaha! <br />
          Onto the next chapter! Peace!
        </div>
      </div>
    </div>
  );
};
