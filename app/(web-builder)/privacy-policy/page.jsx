import { Cookie, Dot } from "@phosphor-icons/react/dist/ssr";

const PrivacyPolicy = () => {
  return (
    <div className="md:w-full flex flex-col gap-6 max-w-screen-xl mx-4 md:mx-auto md:p-10 xl:px-0 md:pt-20">
      <div className=" flex flex-col md:gap-8">
        <h2 className="text-5xl font-bold flex flex-col md:flex-row">
          <span className="w-fit">Privacy&nbsp;</span>
          <span className="flex items-end w-fit">
            P
            <Cookie size={32} className="pb-2" color="#e5e7eb" weight="fill" />
            licy
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold md:pb-8">
          What it is? What&apos;s its purpose? How do we collect data?
        </p>
        <p className="text-sm mt-4">
          This Privacy Policy outlines how FolioFusion (&quot;we,&quot;
          &quot;our,&quot; &quot;us&quot;) collects, uses and protects your
          information. It also describes the Terms of use of the FolioFusion
          application.
        </p>
        <p className="bg-neutral-900 px-2 py-1 rounded-lg w-fit text-sm">
          Last updated: 14th of August, 2024
        </p>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          What data do we collect?
        </h2>
        <div className="flex flex-col gap-2">
          <p>FolioFusion collects the following data:</p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Personal identification information : This includes your email
            address and any other information you provide when creating an
            account or contacting us.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            User-submitted content: This includes any text, images, URLs or
            other media that you upload or submit while using our application.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Website usage data: This includes information about your visit to
            our website, such as your IP address, browser type, device
            information and browsing behavior.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          How do we use your data?
        </h2>
        <div className="flex flex-col gap-2">
          <p>
            FolioFusion collects and uses your data for the following purposes:
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Account management: To create and manage your account, authenticate
            your identity, and provide you with customer support.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Service improvement: To analyze how our users interact with our
            website and application, which helps us improve the user experience.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Data storage: All data you provide or upload (including text,
            images, URLs, etc.) is stored securely. This data is essential for
            the functionality of the portfolio builder.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          What do we use?
        </h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Google Analytics</h3>
          <p>
            We use Google Analytics to gather insights on how users interact
            with our website. The data collected by Google Analytics includes:
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Website traffic sources (e.g., direct, referral, search)
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Pages visited on our website
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Time spent on each page
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Interactions with website elements (e.g., clicks, scrolls)
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Geographic location (country or region)
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Device information (e.g., device type, operating system)
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            Browser information (e.g., browser type, version)
          </p>
          <p>
            This data helps us understand user behavior and improve our service.
            Google Analytics processes this data in accordance with its Privacy
            Policy. For more details on how Google Analytics handles data,
            please refer to
            <a href="https://policies.google.com/privacy" className="underline">
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          Information sharing
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex flex-row items-center gap-1">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties. Your data is only used internally for
            the purposes mentioned above. The only exception is Google
            Analytics, which uses website usage data to help us analyze user
            behavior.
          </p>
          <p className="flex flex-row items-center gap-1">
            Please be aware that any data you upload, submit, or store in our
            application — including but not limited to images, texts and
            personal information — will be visible to others. This includes, but
            is not limited to, images of yourself, images from conferences or
            other events and any other type of image you choose to upload.
            Additionally, any information — including but not limited to
            description of your work experience, educational background, job
            positions, achievements, tournaments, travels, projects,
            technologies used and project descriptions will be made public as
            soon as you upload it. By using our application, you agree to share
            this data with others and FolioFusion to use that information in
            analytics of usage of the FolioFusion application.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          Data security
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex flex-row items-center gap-1">
            We take the security of your data seriously. We implement various
            security measures to protect your personal information and
            user-submitted content. However, please note that no method of data
            transmission or storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          Links to other websites
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex flex-row items-center gap-1">
            Our website may contain links to third-party websites that are not
            operated by us. We have no control over and assume no responsibility
            for the content, privacy policies or practices of any third-party
            websites or services.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          Your data protection rights
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex flex-row items-center gap-1">
            We aim to ensure you are fully informed about your data protection
            rights. Each user is entitled to the following:
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            The right to access: You can request copies of your data.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            The right to rectification: You can request corrections to any
            information you believe is inaccurate. You can also ask us to
            complete any incomplete information.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            The right to erasure: You can request the deletion of your data,
            under certain conditions.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            The right to restrict processing: You can request the limitation of
            your data processing, under certain conditions.
          </p>
          <p className="flex flex-row items-center gap-1">
            <Dot
              size={32}
              weight="duotone"
              color="#06b6d4"
              className="min-w-8"
            />
            The right to object to processing: You can object to the processing
            of your data, under certain conditions.
          </p>
          <p className="flex flex-row items-center gap-1">
            If you make a request, we have one month to respond. To exercise any
            of these rights, please contact us at our email:
            FolioFusion.contact@gmail.com
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          Changes to this Privacy Policy
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex flex-row items-center gap-1">
            We reserve the right to update or change our Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            updated Privacy Policy on this page.
          </p>
        </div>
      </div>{" "}
      <hr />
      <div className="flex gap-4 md:gap-8 flex-col md:flex-row mb-8">
        <h2 className="text-3xl font-bold md:text-4xl md:min-w-96 md:w-96">
          Contact Us
        </h2>
        <div className="flex flex-col gap-2">
          <p className="flex flex-row items-center gap-1">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at FolioFusion.contact@gmail.com.
          </p>
          <p>Thank you for trusting FolioFusion with your information!</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
