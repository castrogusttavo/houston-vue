
<template>
  <Icon :iconName="'list-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ListViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'list-view'
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
