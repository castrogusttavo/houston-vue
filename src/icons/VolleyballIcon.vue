
<template>
  <Icon :iconName="'volleyball'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolleyballIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volleyball'
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
