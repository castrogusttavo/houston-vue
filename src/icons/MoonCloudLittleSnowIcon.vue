
<template>
  <Icon :iconName="'moon-cloud-little-snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudLittleSnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-little-snow'
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
