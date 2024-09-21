
<template>
  <Icon :iconName="'congruent-to'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CongruentToIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'congruent-to'
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
