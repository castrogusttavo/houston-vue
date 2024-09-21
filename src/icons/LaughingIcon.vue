
<template>
  <Icon :iconName="'laughing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaughingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laughing'
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
