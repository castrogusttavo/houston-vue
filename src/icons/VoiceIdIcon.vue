
<template>
  <Icon :iconName="'voice-id'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VoiceIdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'voice-id'
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
