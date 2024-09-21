
<template>
  <Icon :iconName="'congruent-to-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CongruentToCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'congruent-to-circle'
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
