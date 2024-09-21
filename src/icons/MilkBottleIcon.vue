
<template>
  <Icon :iconName="'milk-bottle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MilkBottleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'milk-bottle'
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
