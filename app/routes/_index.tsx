import {
  Box,
  Flex,
  Heading,
  Text,
  Section,
  Badge,
  Button,
  Em,
  Strong,
  Grid,
  Separator,
  Card,
  Callout,
  Tabs,
} from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Goodmintons" },
    {
      name: "description",
      content: "North Cambridge badminton for casual intermediate players",
    },
    {
      name: "keywords",
      content: "badminton, cambridge, intermediate badminton, casual badminton, crc, shuttlecock, racket, north cambridge, chesterton, king's hedges, milton, arbury, crc"
    }
  ];
};

export default function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!scrollRef?.current) return;
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Section content="center" px={{ initial: "3", sm: "9"}}>
        <Flex direction="column" align="center" width="full" mb="6">
          <Heading align="center" size="9">
            <Em>Good</Em>mintons
          </Heading>
          <Flex direction={{initial: "column", sm: "row"}} align="center" gap="1">
            <Text>
              <Em>Badminton that's</Em>
            </Text>
            <Badge size="3" color="orange">
              Fun
            </Badge>
            <Badge size="3" color="blue">
              Friendly
            </Badge>
            <Text>
              <Em>and</Em>
            </Text>
            <Badge size="3" color="green">
              Intermediate
            </Badge>
            <Text>
              <Em>in</Em> <Strong>North Cambridge</Strong>
            </Text>
          </Flex>
        </Flex>
        <Separator size="4" />
        <Grid gap="6" justify="center" columns={{ initial: "1", sm: "2" }} mt="6">
          <Flex justify={{ initial: "center", sm: "end" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11513.381328711323!2d0.11704964989242217!3d52.22877942236921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8710259e64633%3A0x2c47e125bc14d532!2sCambridge%20Regional%20College!5e0!3m2!1sen!2suk!4v1728330502550!5m2!1sen!2suk"
              width="450"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Flex>
          <Flex
            flexGrow="1"
            justify={{ initial: "center", sm: "start" }}>
          <Flex
            maxWidth="400px"
            direction="column"
            gap="2"
          >
            <Heading mb="2">Welcome to Goodmintons</Heading>
            <Text>
              We're a group of badminton enthusiasts based in North Cambridge.
            </Text>
            <Text>
              We play casual intermediate badminton at Cambridge Regional
              College.
            </Text>
            <Text>
              We'd love to welcome more people to join us so we can spread the
              fun of badminton.
            </Text>
            <Text>Click below to find out more about how you can join us.</Text>
            <Box mt="2">
              <Button onClick={handleClick} size="3">
                Find out more
              </Button>
            </Box>
          </Flex>
          </Flex>
        </Grid>
      </Section>
      <Section content="center" px={{ initial: "3", sm: "9"}} ref={scrollRef}>
        <Flex maxWidth="100vw" justify="center">
          <Tabs.Root defaultValue="skills">
            <Tabs.List>
              <Tabs.Trigger value="skills">Skills checklist</Tabs.Trigger>
              <Tabs.Trigger value="how-to">How to join</Tabs.Trigger>
            </Tabs.List>

            <Flex pt="4" maxWidth="1000px" minWidth="50vw" justify="center">
              <Tabs.Content value="skills">
                <Card
                  variant="classic"
                  style={{ background: "var(--blue-10)" }}
                >
                  <Box p="2" maxWidth="500px">
                    <Heading size="4" mb="4">
                      Skills checklist
                    </Heading>
                    <Flex direction="column" gap="4">
                      <Text>
                        Before asking to join us, please honestly answer these
                        questions for yourself in order to assess your skill
                        level appropriately:
                      </Text>
                      <Flex gap="2" direction="column" pl="4">
                        <li>
                          <Text>
                            Are you able to play smash shots, and can you return
                            them?
                          </Text>
                        </li>
                        <Separator size="4" />
                        <li>
                          <Text>
                            Do you find it easy to hit clears from baseline to
                            baseline?
                          </Text>
                        </li>
                        <Separator size="4" />
                        <li>
                          <Text>
                            Can you play serves tight to the top of the net and
                            the service line?
                          </Text>
                        </li>
                        <Separator size="4" />
                        <li>
                          <Text>
                            Are your games highly dynamic, and do they normally
                            involve large amounts of movement all around the
                            court?
                          </Text>
                        </li>
                      </Flex>
                      <Text>
                        If you're answers to all the above are yes, then please
                        apply! If not, your probably aren't the right level for
                        us and should consider looking for a more
                        beginner-friendly group.
                      </Text>
                    </Flex>
                  </Box>
                </Card>
              </Tabs.Content>

              <Tabs.Content value="how-to">
                <Flex
                  justify={{ xs: "center", sm: "start" }}
                  direction="column"
                  gap="2"
                  maxWidth="500px"
                  mt="4"
                >
                  <Text>
                    To join us, all you need to do is send a message to{" "}
                    <Strong>goodmintonscambridge@gmail.com</Strong>. It's that
                    simple!
                  </Text>
                  <Text>
                    Please tell us a little bit about yourself and your past
                    experience with badminton.
                  </Text>
                  <Text>Hopefully, you'll be hearing from us soon!</Text>
                  <Callout.Root>
                    <Callout.Text>
                      <Strong>
                        Please do not message unless you believe you meet the
                        required skill level.
                      </Strong>{" "}
                      We're not looking for badminton grand masters, but this is
                      definitely not a place for total beginners either!
                    </Callout.Text>
                  </Callout.Root>
                </Flex>
              </Tabs.Content>
            </Flex>
          </Tabs.Root>
        </Flex>
      </Section>
    </>
  );
}
