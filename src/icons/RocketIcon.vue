
<template>
  <Icon :iconName="'rocket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RocketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rocket'
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
