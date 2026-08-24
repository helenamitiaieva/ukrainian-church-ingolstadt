import Container from "@/components/common/Container/Container";
import Section from "@/components/common/Section/Section";
import Quote from "@/components/common/Quote/Quote";

export default function HomeQuote() {
  return (
    <Section>
      <Container>
        <Quote
          text="Де двоє чи троє зібрані в Ім’я Моє, там і Я серед них."
          source="Мт. 18:20"
        />
      </Container>
    </Section>
  );
}
