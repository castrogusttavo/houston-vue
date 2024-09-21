
<template>
  <Icon :iconName="'flag-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Flag01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flag-01'
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
