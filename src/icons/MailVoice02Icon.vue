
<template>
  <Icon :iconName="'mail-voice-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailVoice02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-voice-02'
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
