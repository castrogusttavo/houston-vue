
<template>
  <Icon :iconName="'speech-to-text'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpeechToTextIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'speech-to-text'
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
