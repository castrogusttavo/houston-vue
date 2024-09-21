
<template>
  <Icon :iconName="'wordpress'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WordpressIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wordpress'
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
