
<template>
  <Icon :iconName="'maximize-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Maximize01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maximize-01'
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
