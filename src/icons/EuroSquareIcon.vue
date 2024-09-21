
<template>
  <Icon :iconName="'euro-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EuroSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'euro-square'
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
