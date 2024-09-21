
<template>
  <Icon :iconName="'cloud-mid-snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudMidSnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-mid-snow'
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
