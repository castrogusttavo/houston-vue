
<template>
  <Icon :iconName="'png-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Png01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'png-01'
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
