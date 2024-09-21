
<template>
  <Icon :iconName="'ramadhan-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Ramadhan01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ramadhan-01'
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
