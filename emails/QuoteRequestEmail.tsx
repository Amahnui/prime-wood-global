import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface QuoteRequestEmailProps {
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  species: string;
  productType: string;
  volume: string;
  destination: string;
  specifications?: string;
}

export default function QuoteRequestEmail({
  name,
  email,
  phone,
  companyName,
  species,
  productType,
  volume,
  destination,
  specifications,
}: QuoteRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Export Quotation Request</Heading>
            <Text style={headerSubtitle}>
              New quote request from Prime Wood Global website
            </Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={greeting}>Hello Prime Wood Global Export Team,</Text>
            <Text style={paragraph}>
              You have received a new export quotation request from your website.
              Please review the details below and prepare a proforma quotation:
            </Text>

            {/* Customer Information */}
            <Section style={sectionBlock}>
              <Heading style={sectionHeading}>Customer Information</Heading>
              <Section style={infoBox}>
                <InfoRow label="Name" value={name} />
                <InfoRow label="Email" value={email} />
                <InfoRow label="Phone" value={phone} />
                {companyName && (
                  <InfoRow label="Company" value={companyName} />
                )}
              </Section>
            </Section>

            {/* Order Requirements */}
            <Section style={sectionBlock}>
              <Heading style={sectionHeading}>Order Requirements</Heading>
              <Section style={infoBox}>
                <InfoRow label="Timber Species" value={species} />
                <InfoRow label="Product Type" value={productType} />
                <InfoRow label="Target Volume" value={volume} />
                <InfoRow label="Destination Port" value={destination} />
              </Section>
            </Section>

            {/* Specifications */}
            {specifications && (
              <Section style={sectionBlock}>
                <Heading style={sectionHeading}>
                  Dimensions & Specifications
                </Heading>
                <Section style={messageBox}>
                  <Text style={messageText}>{specifications}</Text>
                </Section>
              </Section>
            )}

            <Hr style={divider} />

            <Text style={footer}>
              Please prepare and send a formal proforma quotation to the customer
              within 24 hours, including pricing, availability, and shipping terms.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              {new Date().getFullYear()} Prime Wood Global. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <Text style={infoLabel}>{label}:</Text>
      <Text style={infoValue}>{value}</Text>
    </>
  );
}

const main = {
  backgroundColor: "#faf7f2",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#0a2818",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffe082",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
  padding: "0",
};

const headerSubtitle = {
  color: "#dcfce7",
  fontSize: "14px",
  margin: "0",
  fontWeight: "500",
};

const content = {
  padding: "32px 40px",
};

const greeting = {
  fontSize: "16px",
  lineHeight: "26px",
  fontWeight: "600",
  color: "#333",
  marginBottom: "12px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#555",
  marginBottom: "24px",
};

const sectionBlock = {
  marginBottom: "28px",
};

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#0a2818",
  marginBottom: "16px",
  marginTop: "0",
};

const infoBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
};

const infoLabel = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#d5920c",
  marginBottom: "4px",
  marginTop: "12px",
};

const infoValue = {
  fontSize: "14px",
  color: "#333",
  marginTop: "0",
  marginBottom: "0",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
};

const messageText = {
  fontSize: "14px",
  color: "#333",
  lineHeight: "22px",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footer = {
  fontSize: "13px",
  color: "#6b7280",
  fontStyle: "italic" as const,
};

const footerSection = {
  backgroundColor: "#f9fafb",
  padding: "20px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
};
