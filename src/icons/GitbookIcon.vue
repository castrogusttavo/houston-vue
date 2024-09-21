
<template>
  <Icon :iconName="'gitbook'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitbookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gitbook'
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
