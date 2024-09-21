
<template>
  <Icon :iconName="'go-forward-10-sec'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoForward10SecIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'go-forward-10-sec'
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
