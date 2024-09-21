
<template>
  <Icon :iconName="'dress-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-01'
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
