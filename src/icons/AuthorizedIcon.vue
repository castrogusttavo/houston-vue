
<template>
  <Icon :iconName="'authorized'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AuthorizedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'authorized'
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
