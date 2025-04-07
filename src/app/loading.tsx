import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"

export const Loading = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 w-full h-screen flex items-center justify-center p-4 sm:p-6 md:px-8 lg:px-16 xl:max-w-4xl xl:mx-auto">
    <Terminal>
      <TypingAnimation className="dark:text-white text-muted-foreground">&gt; initializing portfolio...</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Setting up personal environment.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Loading developer profile.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Importing skills and technologies.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Fetching project highlights.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Configuring UI/UX settings.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Syncing achievements and milestones.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Initializing animations and transitions.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Optimizing assets and performance.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-blue-500">
        <span>ℹ Ready to showcase portfolio:</span>
        <span className="pl-2">- about</span>
        <span className="pl-2">- projects</span>
        <span className="pl-2">- contact</span>
      </AnimatedSpan>

      <TypingAnimation delay={6500} className="text-muted-foreground dark:text-white">
        Success! Portfolio initialized.
      </TypingAnimation>

      <TypingAnimation delay={7000} className="text-muted-foreground dark:text-white">
        Launching in 3... 2... 1...
      </TypingAnimation>
    </Terminal>
    </div>
  )
}

export default Loading;
