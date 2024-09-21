
<template>
  <Icon :iconName="'drink'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DrinkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drink'
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
