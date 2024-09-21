
<template>
  <Icon :iconName="'google-gemini'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleGeminiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-gemini'
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
