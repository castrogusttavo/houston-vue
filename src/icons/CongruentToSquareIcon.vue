
<template>
  <Icon :iconName="'congruent-to-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CongruentToSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'congruent-to-square'
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
