
<template>
  <Icon :iconName="'go-forward-30-sec'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoForward30SecIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'go-forward-30-sec'
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
