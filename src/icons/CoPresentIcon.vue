
<template>
  <Icon :iconName="'co-present'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoPresentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'co-present'
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
