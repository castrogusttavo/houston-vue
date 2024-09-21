
<template>
  <Icon :iconName="'solid-line-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolidLine01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solid-line-01'
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
