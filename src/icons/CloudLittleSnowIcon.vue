
<template>
  <Icon :iconName="'cloud-little-snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudLittleSnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-little-snow'
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
