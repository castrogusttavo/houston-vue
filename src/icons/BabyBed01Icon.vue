
<template>
  <Icon :iconName="'baby-bed-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BabyBed01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baby-bed-01'
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
