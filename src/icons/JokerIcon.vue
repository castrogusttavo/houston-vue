
<template>
  <Icon :iconName="'joker'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JokerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'joker'
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
