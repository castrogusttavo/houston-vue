
<template>
  <Icon :iconName="'google-lens'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleLensIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-lens'
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
