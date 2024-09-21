
<template>
  <Icon :iconName="'setting-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Setting07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-07'
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
