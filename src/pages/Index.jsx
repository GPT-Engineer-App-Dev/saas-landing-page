import { Box, Button, Container, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={6}>
              <Heading as="h1" size="2xl">
                Streamline Your Business with Acme
              </Heading>
              <Text fontSize="xl">Acme provides the tools and automations you need to grow your business efficiently.</Text>
              <Button size="lg" colorScheme="white" color="blue.600">
                Get Started
              </Button>
            </Stack>
            <Image src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDB8fHx8MTcxMzA1ODIwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Business team" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Stack spacing={16} align="center">
            <Stack spacing={4} textAlign="center">
              <Heading as="h2" size="xl">
                Why Acme?
              </Heading>
              <Text fontSize="lg">Acme helps you manage your business more effectively.</Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature icon={FaCheck} title="Automation & Workflows">
                Automate repetitive tasks and build custom workflows to streamline processes.
              </Feature>
              <Feature icon={FaCheck} title="Dashboards & Reporting">
                Gain insights into your key metrics with intuitive dashboards and reports.
              </Feature>
              <Feature icon={FaCheck} title="Integrations">
                Connect Acme with your existing tools for a seamless experience.
              </Feature>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Pricing */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={16} align="center">
            <Stack spacing={4} textAlign="center">
              <Heading as="h2" size="xl">
                Plans & Pricing
              </Heading>
              <Text fontSize="lg">Choose the plan that's right for your business.</Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
              <PricingPlan name="Basic" price={29} features={["Feature A", "Feature B", "Feature C"]} />
              <PricingPlan name="Pro" price={49} features={["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"]} />
              <PricingPlan name="Enterprise" price="Custom" features={["Dedicated support", "Custom integrations", "Volume discounts"]} />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Stack spacing={6} align="center">
            <Heading as="h2" size="xl">
              Get Started with Acme Today
            </Heading>
            <Text fontSize="lg">Take your business to the next level with Acme's powerful tools.</Text>
            <Button size="lg" colorScheme="blue">
              Start Free Trial
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const Feature = ({ icon, title, children }) => {
  return (
    <HStack spacing={4} align="start">
      <Box color="blue.600" fontSize="4xl">
        <Box as={icon} />
      </Box>
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text>{children}</Text>
      </VStack>
    </HStack>
  );
};

const PricingPlan = ({ name, price, features }) => {
  return (
    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" p={10}>
      <Stack spacing={6}>
        <Text fontWeight="bold" fontSize="2xl">
          {name}
        </Text>
        <Text fontWeight="bold" fontSize="5xl">
          {typeof price === "number" ? `$${price}` : price}
          <Box as="span" fontSize="2xl" fontWeight="medium">
            /mo
          </Box>
        </Text>
        <VStack spacing={4} pt={8} align="start">
          {features.map((feature, index) => (
            <HStack key={index} spacing={3}>
              <Box color="blue.600">
                <FaCheck />
              </Box>
              <Text>{feature}</Text>
            </HStack>
          ))}
        </VStack>
        <Button size="lg" colorScheme="blue" w="100%">
          Get Started
        </Button>
      </Stack>
    </Box>
  );
};

export default Index;
