
<template>
  <Icon :iconName="'uv-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Uv01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'uv-01'
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
