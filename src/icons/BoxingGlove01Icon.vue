
<template>
  <Icon :iconName="'boxing-glove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoxingGlove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'boxing-glove-01'
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
