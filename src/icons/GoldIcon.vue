
<template>
  <Icon :iconName="'gold'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gold'
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
