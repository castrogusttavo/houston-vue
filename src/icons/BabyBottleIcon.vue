
<template>
  <Icon :iconName="'baby-bottle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BabyBottleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baby-bottle'
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
