
<template>
  <Icon :iconName="'hand-bag-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandBag01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-bag-01'
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
