
<template>
  <Icon :iconName="'spades'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpadesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spades'
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
