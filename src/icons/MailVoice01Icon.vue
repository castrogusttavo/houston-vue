
<template>
  <Icon :iconName="'mail-voice-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailVoice01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-voice-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
