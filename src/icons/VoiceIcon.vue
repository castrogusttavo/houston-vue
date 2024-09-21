
<template>
  <Icon :iconName="'voice'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VoiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'voice'
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
