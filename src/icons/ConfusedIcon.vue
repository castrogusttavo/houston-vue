
<template>
  <Icon :iconName="'confused'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ConfusedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'confused'
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
