
<template>
  <Icon :iconName="'bed-single-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BedSingle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bed-single-01'
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
